import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { Flex} from "@radix-ui/themes";
import Head from "next/head";
import styles from "@/styles/Lawsuit-description.module.css"
import { LawsuitHeader, LawsuitMovementList, PeopleAndLawyers, LawsuitDetails } from '@/components';

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

interface HomeProps {
  variables: {
    query: string;
  };
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const {number} = context.query

  const variables = {
    query: number,
  };

  await apolloClient.query({
    query: searchQuery,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {
      variables,
    },
  });
}

export default function LawsuitPage(props: HomeProps) {
  const router = useRouter();
  const { variables } = props;
  const { data, loading, error } = useQuery(searchQuery, {
    variables,
  });

  const handleBack = () => {
    router.push(`/`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const lawsuit = data?.getSearchQuery.lawsuits[0]
  return (
    <>
      <Head>
        <title>{"Processo " + lawsuit.number}</title>
      </Head>
      <main className={styles.home}>
        <LawsuitHeader number={lawsuit.number} court={lawsuit.court} date={lawsuit.date} handleBack={handleBack}/>
        <Flex gap='9'>
          <LawsuitMovementList movements={lawsuit.activities}/>
          <Flex direction='column'>
            <LawsuitDetails lawsuit={lawsuit}/>
            <PeopleAndLawyers people={lawsuit.related_people} lawyers={lawsuit.lawyers}/>
          </Flex>
          
        </Flex>
        
      </main>
    </>
  );
}