import { Layout, Avatar, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import './header.css'

const { Header } = Layout
const { Text } = Typography
export default function Head() {
    return (
        <>
            {/* <Text className='notification'>03</Text> */}
            <FontAwesomeIcon className='header__content icon' icon={faBell} />
            <Avatar
                className="header__content avatar"
                src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/226396345_112714520999473_4823512747928449349_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=r1Gv66ilVM8AX_X-P0B&_nc_ht=scontent.fhph2-1.fna&oh=00_AT_TedsQ2ajuyXa5zwpHSAfcWKK5gNA3vR0dGSVP3BhjNw&oe=6265FB83"
            />
        </>
    )
}