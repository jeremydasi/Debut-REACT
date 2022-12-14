export default function But() {
    function clicBut(e){
    return function(){(e ? alert("C'est le but !") : alert("C'est dans les gradins"))}
    }
 
    return (
        <div>
            <button onClick={clicBut(true)}>C'est le but !</button>
            <button onClick={clicBut(false)}>C'est dans les gradins !</button>
        </div>
    );
}