import { gql, useLazyQuery } from "@apollo/client";
import { Flex, ScrollArea, Text } from "@radix-ui/themes";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { SearchHeader, SearchInput } from "@/components";
import { LawsuitCard } from "@/components/lawsuit-card/lawsuit-card";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import styles from "@/styles/Home.module.css";

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


export default function Home() {
  
  
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

  return (
    <>
      <Head>
        <title>Consulta processual</title>
      </Head>

      <main className={styles.home}>
        <Flex className={styles.header}>
          <SearchHeader/>
         
          <SearchInput tribunal={court} setTribunal={setCourt} cnj={cnj} setCnj={setCnj} onSearch={onSearch}/>
          <ScrollArea className={styles.results}>
            
            {loadingSearch && <Text>Carregando...</Text>}
            {searchResponse?.getSearchQuery && searchResponse.getSearchQuery.lawsuits.map((item, index) => (
                                                  <LawsuitCard key={index} props={item} handleClick={handleSelectLawsuit}/>
                                                ))}
                                            
          </ScrollArea>
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
