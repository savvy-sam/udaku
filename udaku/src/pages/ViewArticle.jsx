import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'
import Image1 from '../assets/images/forest.jpg'

const ViewArticle = () => {

  return (
    <Layout>
      <>
      <Box>
        <Box>
          <Typography variant='h3' sx={{
            padding: '20px'
          }}>This is the Title of This Article</Typography>
        </Box>
        <Box sx={{
          padding: '20px'
        }}>
        <Box
            component="img"
            sx={{
              height: 466,
              width: 700,
              maxHeight: { xs: 466, md: 600 },
              maxWidth: { xs: 900, md: 800 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Box>
        <Box sx={{
          padding: '20px',
        }}>
          <article>
          For some audiences, Vivek Ramaswamy is a biotech entrepreneur who pushed for pharmaceutical breakthroughs before he tried to break into politics. For others, he is a cultural warrior battling “woke” corporations or a crusader for his definition of “truth,” whether it be the sanctity of two genders or the perpetuation of fossil fuels.

          The identity that the entrepreneur and Republican candidate for president has kept more or less under wraps since his undergraduate days at Harvard is another thing entirely, Da Vek the Rapper.

           Yet there it was at the Iowa State Fair this month, the 38-year-old shape-shifting presidential candidate, microphone in hand, spitting Eminem’s “Lose Yourself” before a largely white crowd that appeared somewhere between amused and enthused. Beside him onstage was the Iowa governor, Kim Reynolds, who watched with the look of a mother baffled by her child’s latest science fair project.
          </article>
          </Box>
      </Box>
      </>
    </Layout>
  )
}

export default ViewArticle