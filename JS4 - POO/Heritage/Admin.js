import User from './User.js'

class Admin extends User{
    
    canEditArticles(){
        
        
        return true;
        
    }
    
}

export default Admin;