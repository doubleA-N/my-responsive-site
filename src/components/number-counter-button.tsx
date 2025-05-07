import { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

const STORAGE_KEY = 'number-counts'

const NumberCounterButtons = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  const [counts, setCounts] = useState<{ [key: number]: number }>(JSON.parse(stored ?? `{}`))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counts))
  }, [counts])

  const handleIncrement = (num: number) => {
    setCounts((prev) => ({
      ...prev,
      [num]: (prev[num] || 0) + 1,
    }))
  }

  const handleDecrement = (num: number) => {
    setCounts((prev) => {
      const newCount = Math.max((prev[num] || 0) - 1, 0)
      return {
        ...prev,
        [num]: newCount,
      }
    })
  }

  const topThree = Object.entries(counts)
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]) // sort descending
    .slice(0, 3)

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={1}>
      {topThree.length > 0 && (
        <Box mt={1}>
          <Typography variant="h6">เลขมาแรง 💨🧨</Typography>
          <Typography color='text.secondary'>ทำไว้แค่ 3 อันดับ เพราะรีบ ขอโทษจ่ะ 😭</Typography>

          <Stack spacing={1} mt={1}>
            {topThree.map(([num, count]) => (
              <Typography variant="h6" key={num}>
                หมายเลข {num} ได้คะแนน {count} โหวต {Number(num) === 2 ? '🥳' : '🙂‍↔️'}
              </Typography>
            ))}
          </Stack>
        </Box>
      )}

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        mt={2}
        justifyContent="center"
      >
        {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
          <Box key={num} width="80px" textAlign="center">
            <Stack spacing={1}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleIncrement(num)}
              >
                {num} {counts[num] ? `(${counts[num]})` : ''}
              </Button>
              {counts[num] > 0 && (
                <Button
                  fullWidth
                  variant="outlined"
                  color='error'
                  size="small"
                  onClick={() => handleDecrement(num)}
                >
                  ลบ 1
                </Button>
              )}
            </Stack>
          </Box>
        ))}
      </Box>

      <Box mt={4}>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => {
            localStorage.removeItem(STORAGE_KEY)
            setCounts({})
          }}
        >
        ล้างคะแนนทั้งหมด
        </Button>
      </Box>
    </Box>
  )
}

export default NumberCounterButtons
