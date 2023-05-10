using DAL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class UserBL
    {
        public static void Put(UserDto user)
        {
           //UserDal.AddUser(user);
        }

        public static UserDto post(UserDto user)
        {
          return  UserDal.AddUser(user);
        }

        public static UserDto isExist(string id)
        {
            return UserDal.isExist(id);
        }
    }
}
