import { gql, useMutation,useQuery } from '@apollo/client';
import { Flex} from "@radix-ui/themes";
import Head from "next/head";
import { useRouter } from 'next/router';

import { LawsuitDetails,LawsuitHeader, LawsuitMovementList, PeopleAndLawyers } from '@/components';
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import styles from "@/styles/Lawsuit-description.module.css"

const searchQuery = gql`
  query search($query: String!) {
    getSearchQuery(query: $query) {
      hits
      lawsuits{
        number
        court
        nature
        kind
        subject
        date
        judge
        value
        related_people{
          name
          role
        }
        lawyers{
          name
        }
        activities{
          description
          date
        }
      }
    }
  }
`;

const getExperiment = gql`
  query($alternative: String!, $simulating: Boolean!) {
    experimentData(alternative: $alternative, simulating: $simulating) {
      status
      simulating
      participating
      experiment_group {
        name
      }
      experiment {
        name
      }
      client_id
      alternative {
        name
      }
    }
  }
`;

const getOffer = gql`
  query Header {
    getNextPlanQuery {
      header {
        title
        subtitle
      }
      footer {
        text
      }
      body {
        price {
          period
          next
          current
        }
        button {
          label
        }
        benefits
      }
    }
  }
`;

const sendMutation = gql`
  mutation RegisterLastInteraction($lawsuitNumber: String!, $movementId: Int!) {
  RegisterLastInteraction(lawsuitNumber: $lawsuitNumber, movementId: $movementId) {
    status
  }
}
`;

interface OfferProps {
  header: {
    title: string
    subtitle: string
  };
  body: {
    benefits: [string]
    button: {
      label: string
    }
    price: {
      period: string
      next: string
      current: string
    }
  };
  footer: string
}

interface HomeProps {
  variables: {
    query: string;
  };
  experiment: string
  offer: OfferProps
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const {number} = context.query

  const exp_variables = {
    alternative: "control",
    simulating: false
  };

  const [exp_result, offer_result] = await Promise.all([
    
    apolloClient.query({
      query: getExperiment,
      variables: exp_variables,
    }),

    apolloClient.query({
      query: getOffer,
    })
  ]);

  const variables = {
    query: number,
  };

  return addApolloState(apolloClient, {
    props: {
      variables,
      experiment: exp_result.data.experimentData.alternative.name,
      offer: offer_result.data.getNextPlanQuery
    },
  });
}

export default function LawsuitPage(props: HomeProps) {
  const router = useRouter();
  const { variables, experiment, offer } = props;
  const { data, loading, error } = useQuery(searchQuery, {
    variables,
  });

  const handleBack = () => {
    router.push(`/`);
  };

  const callAccept = () => {
    router.push("/lawsuit/offer")
  }

  const [registerLastInteraction] = useMutation(sendMutation);
  
  const lawsuit = data?.getSearchQuery.lawsuits[0]
  
  const callInteraction = async (id: number) => {
    
    await registerLastInteraction({
      variables: {
        lawsuitNumber: lawsuit.number,
        movementId: id
      },
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{"Processo " + lawsuit.number}</title>
      </Head>
      <main className={styles.home}>
        <LawsuitHeader number={lawsuit.number} court={lawsuit.court} date={lawsuit.date} handleBack={handleBack}/>
        <Flex gap='9'>
          <LawsuitMovementList movements={lawsuit.activities.slice().reverse()} 
                                participating={experiment == 'variant-a' || experiment == 'variant-b'} 
                                  offer={offer}
                                  callAccept={callAccept}
                                  callInteraction={callInteraction}/>
          <Flex direction='column' gap='4'>
            <LawsuitDetails lawsuit={lawsuit}/>
            <PeopleAndLawyers people={lawsuit.related_people} lawyers={lawsuit.lawyers}/>
          </Flex>
          
        </Flex>
        
      </main>
    </>
  );
}