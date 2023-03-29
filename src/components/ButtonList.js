import Button from "./Button"

const ButtonList = () =>{
    const list = [ 'All','Music','Sports','Gaming','Guitar','Calisthenics','Bodybuilding','Cricket','Soccer','Tseries',]
    return (
        <div className="flex" >
            {list.map((item,i) => <Button key={i} name={item}/>)}
            
           
        </div>
    )
}

export default ButtonList