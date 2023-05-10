using AutoMapper;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserDal
    {

        public static UserDto AddUser(UserDto user)
        {
            using (var db = new DBContext())
            {
                try
                {
                    string isExist="";
                    foreach(var item in db.userTable)
                    {
                        if(item.password==user.password && user.password!=null)
                        {
                            return null;
                        }
                    }
                    userTable myUser = db.userTable.Add(Mapper.Map<userTable>(user));
                    db.SaveChanges();
                    return Mapper.Map<UserDto>(myUser);
                    
                }
                catch (Exception e)
                {
                    return null;
                }

            }

        }

        public static UserDto isExist(string id)
        {
            using (var db = new DBContext())
            {
                try {
                    userTable myUser = db.userTable.Find(id);
                    return Mapper.Map<UserDto>(myUser); }
             catch (Exception e)
            {
                return null;
            }
            }
            
        
        }
    }
}
