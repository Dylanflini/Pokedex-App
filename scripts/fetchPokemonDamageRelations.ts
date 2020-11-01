import axios from 'axios'

export default async function fetchPokemonDamageRelations(types:[]){

  type damageRelations = {
    doubleDamageTo: relation[],
    doubleDamageFrom: relation[],
  };

  type relation = {
    name: string,
    url: string,
  }
    
  async function x(names:[]) {
    
    let damageRelation:damageRelations[] = [];

    for (let name of names){
      const { data } = await axios.get( `https://pokeapi.co/api/v2/type/${name.type.name}` )


      damageRelation.push({
        doubleDamageTo: data.damage_relations.double_damage_to,
        doubleDamageFrom: data.damage_relations.double_damage_from,}
      )

    }

    return damageRelation;    
  }

  try {

    return x(types)
    
  } catch (error) {
    console.log(error)
    return null
  }

}
