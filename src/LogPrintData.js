export const PrintData = ({link, title, description, addA, addB, addC, addD}) => {
    
    return <div className='content-app'>
        <div className='head-content-app'>{`${title}`}</div>
        <div className='icon-poke'>
            <img  src={link} alt={'Pokemon-profiles'} />
        </div>
        <div>ID{`  ${description}`}</div>
        <input style={{width:'70%', outline: 'none'}} readOnly type='text' value={addA?addA:'Loading content'}/>
        <div>{addB}</div>
        <div>{addC}</div>
        <div>{addD}</div>
    </div>
}