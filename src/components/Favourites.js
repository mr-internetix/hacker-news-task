import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';
import { getBoomarks , removeFavourite } from './api'
import { useState , useRef} from 'react'

function Favourites() {

  const ref = useRef(null)
  const [data , setData] = useState()
  const [favourite , setFavourite] = useState(false)
   getBoomarks().then(data => setData(data))

  const handleDelete = () =>{
    setFavourite(!favourite)
    let title = ref.current.childNodes[1].children[0].innerText;
    let author  = ref.current.childNodes[1].children[1].innerText;
    let link = ref.current.childNodes[1].children[3].href;

    let data  = {
      "title" : title , 
      "author" : author , 
      "link" : link
    }

    removeFavourite(data);
    

  }
  return  data ? (
    <div className='row'>
      { data.map((elem) =>{

        return (
          <div className='col-sm-4 p-4' >
          <div ref={ref} className="card">  
            <div className='favourite' onClick={handleDelete}>
               <button className='btn-danger'>Delete</button>
            </div>
            <div className="card-body">
              <h5 className="card-title" >Title : <a href={elem.url}> {elem.title}</a></h5>
              <p className="card-text">{elem.by}</p>
              <a>Blog Link : </a> <a href={elem.url} className="card-link"> {elem.url}</a>
            </div>
          </div>
        </div>
        )
      
      }
      

      )}
    </div>
  ) : " NO BOOK MARKS "
}

export default Favourites
