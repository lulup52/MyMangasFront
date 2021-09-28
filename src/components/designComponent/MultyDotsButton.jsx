import React from 'react';
import { MdShoppingCart, MdRemoveRedEye, MdLibraryBooks } from "react-icons/md";
import { IoIosTrash } from "react-icons/io";


import '../style/sass/animation.css';

export default function MultyDotsButton({idButton, tomeId,content, style, buttons, functions}) {

    
    return (      
  
        <>
            <div className="treeDotsButtonContainer">

                <div className="buttonHolder"></div>
                <div className="buttonContainer">
                    {
                        buttons.map(button => {
                            switch(button ) {
                                case 'details':
                                    return (<div className="button bOne" onClick={() => functions.showDetails(idButton)}><i><MdRemoveRedEye /></i></div>)
                                    break; 
                                case 'trash':
                                    return (<div className="button bOne" onClick={() => functions.deleteTome(tomeId)}><i><IoIosTrash /></i></div>)
                                    break; 
                            }
                        })
                    }
                </div>

            </div>
        </>
    );
}
  
