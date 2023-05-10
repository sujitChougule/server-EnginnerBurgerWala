import ErrorHandler from '../utils/ErrorHandler.js'
export const isAuthenticated=(req,res,next)=>{
    const token=req.cookies["connect.sid"];
    if(!token){
        return next(new ErrorHandler("login first",404));
    }
    next();
};

export const autherizedAdmin=(req,res,next)=>{
    
    if(req.user.role!=="admin"){
        return next(new ErrorHandler("only admin allowed",405));
    }
    next();
}