function BasicFunction() {
    let name = 'Poowadon';
  
    const textHello = <h1>Hello</h1>
  
    function addTitle(title) {
       return `${title} ${name}`;
    }
    return (
      <div className="App">
        {textHello}
        <h1>{addTitle('นาย')}</h1>
      </div>
    );
  }
  
  export default BasicFunction;