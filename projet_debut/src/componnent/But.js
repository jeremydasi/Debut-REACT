export default function But() {
    function clicBut(e){
    return function(){(e ? alert('but') : alert("C'est dans les gradins"))}
    }
 
    return (
        <div>
            <button onClick={clicBut(true)}>But</button>
            <button onClick={clicBut(false)}>C'est dans les gradins</button>
        </div>
    );
}