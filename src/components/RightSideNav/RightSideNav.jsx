import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h3 className="text-xl font-semibold">Login With</h3>
                <div>
                    <button className="flex items-center gap-2 text-xl w-full btn-outline font-medium capitalize btn my-3 hover:text-blue-500 hover:border-blue-500 hover:bg-transparent"><FaGoogle></FaGoogle> Login With Google</button>
                    <button className="flex items-center gap-2 text-xl w-full btn-outline font-medium capitalize btn my-3 hover:text-blue-500 hover:border-blue-500 hover:bg-transparent"><FaGithub></FaGithub> Login With Github</button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-3">Find Us On</h3>
                <div>
                   <a href="" className="flex text-xl items-center gap-2 p-4 border rounded-t-lg border-[#E7E7E7]"><FaFacebook className="text-blue-500"></FaFacebook> <span className="text-[#706F6F]">Facebook</span></a>
                   <a href="" className="flex text-xl items-center gap-2 p-4 border-x  border-[#E7E7E7]"><FaTwitter className="text-[#58A7DE]"></FaTwitter> <span className="text-[#706F6F]">Twitter</span></a>
                   <a href="" className="flex text-xl items-center gap-2 p-4 border rounded-b-lg border-[#E7E7E7]"><FaInstagramSquare className="text-[#D82D7E]"></FaInstagramSquare> <span className="text-[#706F6F]">Instagram</span></a>
                </div>
            </div>
            <div className="p-4">
            <div className="bg-[#F3F3F3]">
                <h3 className="text-xl p-4 font-semibold mt-4 mb-4">Q-Zone</h3>
                <div>
                   <img src={qzone1} className="w-full" alt="" />
                   <img src={qzone2} className="w-full" alt="" />
                   <img src={qzone3} className="w-full" alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default RightSideNav;