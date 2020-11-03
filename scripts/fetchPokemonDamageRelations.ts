import axios from 'axios'

export default async function fetchPokemonDamageRelations(types:[]){

  // type damageRelations = {
  //   doubleDamageTo: relation[],
  //   doubleDamageFrom: relation[],
  // };

  // type relation = {
  //   name: string,
  //   url: string,
  // }
    
  async function x(names:any) {
    
    let doubleDamageTo = []
    let doubleDamageFrom = []
    // let damageRelation:damageRelations[] = [];

    for (let name of names){

      const { data } = await axios.get( `https://pokeapi.co/api/v2/type/${name.type.name}` )

      doubleDamageTo = [...doubleDamageTo, ...data.damage_relations.double_damage_to]
      doubleDamageFrom = [...doubleDamageFrom, ...data.damage_relations.double_damage_from]

    }

    return [doubleDamageTo, doubleDamageFrom]
  }

  try {

    return x(types)
    
  } catch (error) {
    console.log(error)
    return null
  }

}
