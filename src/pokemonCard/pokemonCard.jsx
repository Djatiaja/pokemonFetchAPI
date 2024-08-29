import styles from './pokemonCard.module.css'
import { useState } from 'react'

function PokemonCard(props){
    var [count, setCount] = useState(1)
    var [position, setPosition] = useState(['back_', 'front_'])
    var [tipe, setTipe] = useState('default')
    var [pokemonImage, setPokemonImage] = useState('front_default')

  function handleClick(amount) {
    if(count+amount >= 0 && count+amount < 2) {
      setCount(count=>count+amount)
    } else if(count+amount === 2) {
      setCount(count=>0)
    } else {
      setCount(count=>1)
    }
    setPokemonImage(pokemonImage=>position[count] + tipe)

    console.log(count)
  }

  function handleTipe() {
    if(tipe === 'default') {
      setTipe(tipe=>'shiny')
    } else {
      setTipe(tipe=>'default')
    }
    console.log(count)
    setPokemonImage(pokemonImage=>position[count] + tipe)

  }

    return(
        <div className={styles.nav}>
            <div className={styles.imageHolder}>
                <img src={props.image[pokemonImage]} alt="" className={styles.pokemonImage}/>
                <div className={styles.buttonHolder}>
                    <button className={styles.buttonImage} onClick={()=>handleClick(-1)}>kiri</button>
                    <button className={styles.buttonImage} onClick={()=>handleClick(1)}>kanan</button>
                </div>
            </div>
            <div className={styles.textBox}>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>: {props.name}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>: {props.height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>: {props.weight} kg</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>: {props.abilities}</td>
                    </tr>
                </table>
                <button onClick={()=>handleTipe()}>{tipe}</button>
            </div>
        </div>
    )
}
export default PokemonCard