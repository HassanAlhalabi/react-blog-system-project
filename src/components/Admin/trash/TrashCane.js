import React from 'react';
import DeleteSharp from '@material-ui/icons/DeleteSharp';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    trashCane: {
        color: '#EEE',
        fontSize: '180px'
    },
    itemsNumber: {
        position: 'absolute',
        backgroundColor: '#454',
        color: '#FFF',
        fontWeight: 'bold',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '20px',
        right: '30px'
    },
    caneBorder: {
        position: 'relative',
        border: '2px solid #FFF',
    },
    title: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        color: '#484E52'
    }
})

const TrashCane = ({itemsNumber, link, title}) => {
    
    const classes = useStyles();  

    return ( 
        <div className='trash-cane p-4'>
            <Link to={link}>   
                <div className={classes.caneBorder}>
                    <div className={classes.itemsNumber}>
                        <span>{itemsNumber}</span>
                    </div>   
                    <span className={classes.title}>{title}</span> 
                    <DeleteSharp className={classes.trashCane}/>
                </div>
            </Link>
        </div>
     );
}
 
export default TrashCane;