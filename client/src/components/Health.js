import { useState } from 'react'

const dietary_rest = ["alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free", "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "mediterranean", "mollusk-free", "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian", "pork-free", "red-meat-free", "sesame-free", "shellfish-free", "soy-free", "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"]
var initList = []
dietary_rest.forEach((id) => initList.push({id: id, checked: false}))

const Health = () => {
    const [items, setItem] = useState(initList)

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
        setItem(listItems)
    }

    return (
        <main className="Health">
            <ul className='SidebarList'>
                {items.map((item) => (
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
