import React from 'react'
import normalizeId from '../../scripts/normalizeId'
import { formatData, formatHeight, formatWeight } from '../../scripts/utils'
import Chart from '../chart'
import PokedexButtons from '../pokedexButtons'
import PokemonTypes, { POKEMONS_TYPE_COLORS } from '../pokemonTypes'
// @ts-ignore
import { pokedex_container, flex_container, image_container, info_container, chart_container } from './styles.module.scss'
import styles from '../card/styles.module.scss'
import ReactDOM from 'react-dom'

export function Pokedex( {
  pokemon,
  advantage,
  weakness,
  previousPokemon,
  nextPokemon,
} ) {

  const { color } = POKEMONS_TYPE_COLORS.find( element => element.name === pokemon.types[0].type.name )

  const [isRender, setIsRender] = React.useState( false )

  React.useEffect( () => setIsRender( true ), [] )

  const [data, axisX] = formatData( pokemon.stats )

  return (
    <div className={ pokedex_container }>

      <div className={ flex_container + ' ' + image_container } >

        <div >
          <img className={styles.img} src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId( pokemon.id ) }.png` } alt={ `Is the pokemon called ${ pokemon.name }` } />

        </div>

      </div>

      <div className={ flex_container + ' ' + info_container } >
        <div>
          <h2>Type</h2>
          <PokemonTypes fontSize='16px' types={ pokemon.types } />

          <h2>Advantage</h2>
          <PokemonTypes fontSize='16px' types={ advantage } isDamageRelation={ true } />

          <h2>Weakness</h2>
          <PokemonTypes fontSize='16px' types={ weakness } isDamageRelation={ true } />

        </div>
        <div>

          <p>
            <strong> Height: </strong>{ formatHeight( pokemon.height ) }
          </p>
          <p>
            <strong>Weight: </strong>{ formatWeight( pokemon.weight ) }
          </p>

        </div>
      </div>

      <div
        className={ flex_container + ' ' + chart_container } >

        <h2 >Stats</h2>
        <Chart
          height='250px'
          barColor={ color }
          axisY={ -1 }
          axisX={ axisX }
          data={ data }
          maxValue={ Math.max( ...data ) }
        />

      </div>

      {
        isRender ?
          ReactDOM.createPortal(
            <PokedexButtons
              previousPokemon={ previousPokemon }
              nextPokemon={ nextPokemon }
            />, document.body )
          : null
      }

    </div>
  )
}
