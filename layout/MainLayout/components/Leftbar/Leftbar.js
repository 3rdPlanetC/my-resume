import { Grid, Avatar, Box } from '@material-ui/core'
import { Text } from '../../../../components'

export default props => {
    return (
        <Grid item lg={12} className={`${true ? "theme-dark": "theme-light"} leftbar-wrapper`}>
            <Box className={`left-box left-avatar`}>
                <Avatar alt="Remy Sharp" src="/static/images/earth-1.jpg" className="avatar-image" />
            </Box>
            <Box className={`left-box left-name`}>
                <Text ele="h6" fontClass="kanit-bold" spanClass="left-title" gutterBottom id="name">ชื่อ - นามสกุล</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="name-firstName">ชื่อ : ชลศรัย</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="name-lastName">นามสกุล : อรรถชิตวาทิน</Text>
            </Box>
            <Box className={`left-dob left-box`}>
                <Text ele="h6" fontClass="kanit-bold" spanClass="left-title" gutterBottom id="dob">อายุ - วัน/เดือน/ปีเกิด</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="dob-age">อายุ : 23ปี</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="dob-dob">วัน/เดือน/ปีเกิด : 21/08/1996</Text>
            </Box>
            <Box className={`left-contact left-box`}>
                <Text ele="h6" fontClass="kanit-bold" spanClass="left-title" gutterBottom id="contact">ติดต่อ</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="contact-email">E-mail : eth.c@beeative.com</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="contact-facebook">FB : Eth Chonlasai Attachitvatin</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="contact-instagram">IG : ethchonlasai</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="contact-line">Line ID : eth1996</Text>
            </Box>
            <Box className={`left-education left-box`}>
                <Text ele="h6" fontClass="kanit-bold" spanClass="left-title" gutterBottom id="education">ประวัติการศึกษา</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="education-primary">ประถม : โรงเรียนณัฏฐวุฒิวิทยา</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="education-secondary">มัธยม : โรงเรียนบางกะปิ (ม.1 - ม.6)</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="education-college">อุดมศึกษา : สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
            </Box>
            <Box className={`left-skill left-box`}>
                <Text ele="h6" fontClass="kanit-bold" spanClass="left-title" gutterBottom id="skill">ทักษะ - ความสามารถ</Text>
                <Text ele="body1" fontClass="kanit-regular" spanClass="left-desc" gutterBottom id="skill-primary">พื้นฐาน : HTML, CSS, JAVASCRIPT</Text>
            </Box>
        </Grid>
    )
}