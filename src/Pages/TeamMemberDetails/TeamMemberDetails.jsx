import member from "../../assets/images/member-1.jpg";
import Container from "../../Components/Shared/Container/Container";
import "./style.css"

const TeamMemberDetails = () => {
  return (
    <div className="border-t-2 py-4">
      <Container>
        <div>
          <h1 className="text-2xl bg-[#ebdcd6] mb-4 pl-4 py-2 font-bold text-black text-center">
            Personal Information
          </h1>
          <div className="flex gap-20">
            <div className="w-[300px] h-[400px]">
              <img src={member} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="bg-base-200 flex-1 px-10">
              <div>
                <h1 className="text-xl font-bold py-3 border-b-2">
                  Personal Information
                </h1>
            
                <div className="">
                  <div className="overflow-x-auto">
                    <table className="table border">
                      {/* head */}
                      <thead></thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="row-border">
                          <td className="column-border">Name</td>
                          <td>Jhonson Curter</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover row-border">
                          <td className="column-border">Employee ID</td>
                          <td>4455967</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td className="column-border">Designition</td>
                          <td>Tax Accountant</td>
                        </tr>
                        <tr>
                          <td className="column-border">Department</td>
                          <td>Software</td>
                        </tr>
                        <tr>
                          <td className="column-border">Email</td>
                          <td>example34@gmail.com</td>
                        </tr>
                        <tr>
                          <td className="column-border">Phone</td>
                          <td>+8801756985465</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <h1 className="text-xl font-bold py-3 border-b-2">
                Academic Qualification 
                </h1>
            
                <div>
                  <div className="overflow-x-auto">
                    <table className="table border">
                      {/* head */}
                      <thead></thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="row-border">
                          <td className="column-border">B.Sc in Computer Science & engineering</td>
                          
                        </tr>
                        
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeamMemberDetails;
