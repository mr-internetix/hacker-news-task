import React, { useEffect, useState , useRef} from 'react';
import { getStory } from '../api';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';

import { postFavourite } from '../api'

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    const ref = useRef(null);
    const [favourite , setFavourite] = useState(false)
    useEffect(() => {

      getStory(storyId).then((data) => {
        if (data && data.url) {
          setStory(data);
        }
      });
    });

    const { title, id, url ,by } = story;

    
    const handleFavourite = (e)=>{
        setFavourite(!favourite)
          let title = ref.current.childNodes[1].children[0].innerText;
          let author  = ref.current.childNodes[1].children[1].innerText;
          let link = ref.current.childNodes[1].children[3].href;

          let data  = {
            "title" : title , 
            "author" : author , 
            "link" : link
          }

          postFavourite(data)

    }

    
        
        return story && url ? (
            <>
              <div className='col-sm-4 p-4' >
                <div  id={id}  ref={ref} className="card">
                  <div className='favourite' onClick={handleFavourite}>
                     { favourite ? <AiFillHeart id={id} /> : <AiOutlineHeart id={id} />}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" >Title : <a href={url}> {title}</a></h5>
                    <p className="card-text">Author : {by}</p>
                    <a>Blog Link : </a> <a href={url} className="card-link"> {url}</a>
                  </div>
                </div>
              </div>
            </>
    ) : <h2>loading...</h2> ;

    

}

