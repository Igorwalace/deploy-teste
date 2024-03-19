import React, { useEffect, useState } from 'react'

const App = () => {
      const getItems = () => {
        const listV = JSON.parse(localStorage.getItem('list'));
        if(listV){
          return JSON.parse(localStorage.getItem('list'));
        } else {
          return [
            { id: 1, titulo: 'Correr' },
            { id: 2, titulo: 'Arrumar o Quarto' },
            { id: 3, titulo: 'Lavar a Louça' }, // Corrected duplicate title
          ]
        }
      }
      const [list, setList] = useState(getItems());
      
    const [title, setTitle] = useState('');
    
      // Fetch data from localStorage only on mount (optional, based on your use case)
      
    

        useEffect(() => {
          localStorage.setItem('list', JSON.stringify(list));
        }, [list]);
   
      
    const handleNewList = () => {
      const newObjet = [
          ...list,
          {
              id: Math.floor(Math.random() * 10000),
              titulo: title,
          },
      ];
      setList(newObjet);
  };
  const handleSendNewList = (e) => {
      e.preventDefault();
      setTitle('');
      handleNewList(title);
  };

  return (
    <div>
      {list.map((info)=>(
        <h1 key={info.id} >{info.titulo}</h1>
      ))}
      <form onSubmit={handleSendNewList}>
                        <label
                            htmlFor="search"
                            id="label-titulo bg-transparent"
                            className="text-xl "
                        >
                            Digite o Título da Tarefa
                        </label>
                        <input
                            type="search"
                            id="search"
                            className="bg-transparent rounded-md border-b-2 p-2 pb-1 mt-2 text-white text-lg placeholder:text-xl  placeholder:text-white outline-none"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="absolute bottom-4 left-20 right-20 bg-[#162c46] text-white rounded-md p-1"
                        >
                            Concluido
                        </button>
                    </form>
    </div>
  )
}

export default App