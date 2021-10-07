import { useState } from "react";
import { Item } from "../../types/Item";

import * as C from "./styles";

import { categories } from "../../data/categories";

type Props = {
  onAdd: (item: Item) => void;
}

export function InputArea({onAdd}: Props){

  const[dateField, setDateField] = useState('')
  const[category, setCategory] = useState("")
  const[title, setTitle] = useState("")
  const[amount, setAmount] = useState(0)

  let categoriesKey: string[] = Object.keys(categories)

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())){
      errors.push("Data inválida!")
    }
    if(!categoriesKey.includes(category)){
      errors.push("Categoria inválida!")
    }
    if(title === "") {
      errors.push("Título vazio!")
    }
    if(amount <= 0){
      errors.push("Valor inválido!")
    }
    if(errors.length > 0){
      alert(errors.join("\n"))
    } else {
      onAdd({
        date: new Date(dateField),
        category,
        title,
        amount
      })
    }
  }
  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateField} onChange={ e => setDateField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={category} onChange={ e => setCategory(e.target.value)}>
          <>
            <option disabled>Selecione uma categoria</option>
            { categoriesKey.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            )) }
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={title} onChange={ e => setTitle(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={amount} onChange={ e => setAmount(parseFloat(e.target.value))} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent} >Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
}