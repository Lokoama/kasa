import './Tag.css'

// Composant Tag qui avec la props tag permet que lorsque l'on y met un tableau de chaîne de caractère. Cette fonction permet de récupérer
// chaque élément dans ce tableau et de créer un span pour ce dernier.

function Tag({tag}) {
    return (
        <div className="tag">
            {tag.map((tag, index) => (
            <span key = {index}> {tag} </span>
            ))}
        </div>
    )
}

export default Tag