const ArrowFunction = () => {
    let name = 'Poowadon';
  
    const textHello = <h1>Hello</h1>
  
    const addTitle = (title) => {
       return `${title} ${name}`;
    }
    return (
      <div className="App">
        {textHello}
        <h1>{addTitle('นาย')}</h1>
      </div>
    );
  }
  
  export default ArrowFunction;