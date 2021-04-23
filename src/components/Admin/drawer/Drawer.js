import React , {useState} from 'react';
import List from '@material-ui/core/List';
import DrawerLink from './DrawerLink';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import PersonAdd from '@material-ui/icons/PersonAdd';

const Drawer = ({drawerIsClosed , handleDrawerClose}) => {

    const [user,setUser] = useState('admin');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = index => {
        setSelectedIndex(index);
    };

    return ( 
        <div className={drawerIsClosed === true ?
            'drawer d-flex justify-content-between drawer-closed'
        :
            'drawer d-flex justify-content-between drawer-open'
        }>
        <div className='drawer-links pt-5'>
            <Divider />  
            <List component="ul" aria-label="main mailbox folders">
                <DrawerLink
                    index={0}
                    handleListItemClick={handleListItemClick}
                    selectedIndex={selectedIndex}
                    text={'Dashboard'}
                    icon={<DashboardRounded />}
                    to={'/admin-panel/dashboard'}
                />
                <DrawerLink
                    index={1}
                    handleListItemClick={handleListItemClick}
                    selectedIndex={selectedIndex}
                    text={'My Articles'}
                    icon={<DescriptionRoundedIcon />}
                    to={'/admin-panel/my-articles'}
                />  
                <DrawerLink
                    index={2}
                    handleListItemClick={handleListItemClick}
                    selectedIndex={selectedIndex}
                    text={'New Article'}
                    icon={<AddCircleRoundedIcon />}
                    to={'/admin-panel/new-article'}
                />
                <DrawerLink
                    index={3}
                    handleListItemClick={handleListItemClick}
                    selectedIndex={selectedIndex}
                    text={'Users'}
                    icon={<GroupRoundedIcon />}
                    to={'/admin-panel/users'}
                />
                <DrawerLink
                    index={4}
                    handleListItemClick={handleListItemClick}
                    selectedIndex={selectedIndex}
                    text={'New User'}
                    icon={<PersonAdd />}
                    to={'/admin-panel/add-user'}
                />      
            </List>
        </div>
        <div className='upper-drawer d-flex justify-content-end'>   
            <Button onClick={handleDrawerClose}>     
                <ViewListRoundedIcon fontSize='large' />
            </Button>
        </div>
    </div>
     );
}
 
export default Drawer;