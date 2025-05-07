import { Box, Typography } from "@mui/material"

const Header = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
        <Typography variant="h4" gutterBottom>
            Hello Election 2568🎉
        </Typography>
        <Typography variant="h5" gutterBottom>
            P'Nuy susu! 💪🏻
        </Typography>
        <Typography>
            🧨อย่ารีเฟรชเว็บถ้าไม่จำเป็น🧨
        </Typography>
        </Box>
    )
}

export default Header