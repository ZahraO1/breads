const React = require('react')
//imports from default.jsx
const Default = require('./layouts/default')
//{breads} comes from breads_controller
function Index({breads}){
    return(
        <Default>
            <h2>Index Page</h2>
            {/* <p>I have {breads[3].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread, index) =>{
                        return(
                        <li key = {index}>
                            <a href = {`/breads/${index}`}>
                                {bread.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>

        </Default>
    )
}
module.exports = Index