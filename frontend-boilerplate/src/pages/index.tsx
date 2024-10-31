import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import { HelloWorld, SearchHeader, SearchInput } from "@/components";
import { UserCard } from "@/components/user-card/user-card";
import { LawsuitCard } from "@/components/lawsuit-card/lawsuit-card";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import styles from "@/styles/Home.module.css";

const UserFragment = gql`
  fragment userFragment on User {
    email
    name
    age
  }
`;

const exampleQuery = gql`
  query user($userId: ID!) {
    getUserQuery(id: $userId) {
      id
      ...userFragment
    }
  }
  ${UserFragment}
`;

const searchQuery = gql`
  query search($query: String!) {
    getSearchQuery(query: $query) {
      hits
      lawsuits{
        number
        court
      }
    }
  }
`;

interface HomeProps {
  variables: {
    query: string;
  };
}

export default function Home(props: HomeProps) {
  const { variables } = props;
  const { data } = useQuery(searchQuery, {
    variables,
  });
  const router = useRouter();
  const [court, setCourt] = useState('Tribunal')

  const [cnj, setCnj] = useState('');

  const [loadSearch, { loading: loadingSearch, data: searchResponse }] =
    useLazyQuery(searchQuery);

  const onSearch = () => {
    loadSearch({
      variables: {
        query: cnj,
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }

  const handleSelectLawsuit = (selected) => {
    router.push(`/lawsuit/${selected.number}`); 
  };

  const search = data?.getSearchQuery;
  return (
    <>
      <Head>
        <title>Consulta processual</title>
      </Head>

      <main className={styles.home}>
        <Flex className={styles.header}>
          <SearchHeader/>
         
          <SearchInput tribunal={court} setTribunal={setCourt} cnj={cnj} setCnj={setCnj} onSearch={onSearch}/>
          <Flex className={styles.results}>
            
            {loadingSearch && <Text>Carregando...</Text>}
            {searchResponse?.getSearchQuery && searchResponse.getSearchQuery.lawsuits.map((item, index) => (
                                                  <LawsuitCard key={index} props={item} handleClick={handleSelectLawsuit}/>
                                                ))}
                                            
          </Flex>
        </Flex>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const variables = {
    query: "Ana luiza",
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
