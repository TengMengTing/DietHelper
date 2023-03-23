const Health = (prop) => {

    const handleCheck = (id) => {
        const listItems = prop.items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
        prop.setItems(listItems)
    }

    return (
        <main className="Health">
            <ul className='SidebarList'>
                {prop.items.map((item) => (
                    <li className="HealthOption" key={item.id}>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label>{item.id}</label>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Health;
