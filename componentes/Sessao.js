function Sessao() {
    const {search, sorted} = React.useContext(SearchContext);
    const randomTone = Math.floor(Math.random() * 359);
    const listItens = dados[0].eventos.filter(a=> a.texto.includes(search)).map((item, index) => {
        return <Item {...item} lado={ index % 2 === 0}></Item> })[!sorted ? 'reverse' : 'slice']()
    return <div className="  card shadow p-3  rounded" style={{ backgroundColor: `hwb(${randomTone}deg 0% 0% / 7%`}}>
        {listItens }
    </div>
   

}

