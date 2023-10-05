import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from '../../store/heroes/heroesAction';
import HeroesItem from './HeroesItem';

const HeroesList = () => {

    const {heroes, loading} = useSelector(state => state.heroes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHeroes())
    },[])


    return (
        <div>
            {loading ? (
                <h3>loading</h3>
            ) : (
                <>
                {heroes.map((hero) => (
                    <HeroesItem key={hero.id} hero={hero}/>
                ))}
                </>
            )}
        </div>
    );
};

export default HeroesList;