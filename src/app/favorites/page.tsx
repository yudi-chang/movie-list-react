"use client";
import React from 'react';
import Movies from '@/components/Movies';
import Container from '@/components/Container';
import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.movie.favorites);
  
  return (
    <main className="pb-16">
      <Container>
        <Movies 
          movies={favorites} 
          isLoading={false} 
          isErrorFetching={false} 
          showUtilities={false} 
          title="Favorites"
        />
      </Container>
    </main>
  );
};

export default FavoritesPage;
