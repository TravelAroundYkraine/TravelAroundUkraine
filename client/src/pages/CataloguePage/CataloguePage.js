import React from 'react';
import { styled, Stack, Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CatalogTourCard, CatalogMainSection, CatalogMainFilter } from '../../components';

const FilterContainer = styled((props) => <Grid item xs={12} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 10,
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
  padding: '25px 0',
  height: 'fit-content',

  [theme.breakpoints.up('laptop')]: {
    width: 295,
    order: '-1',
  },
}));

const CataloguePage = () => (
  <Box sx={{ backgroundColor: '#EDEDED', paddingBottom: '150px' }}>
    <CatalogMainSection />
    <Container>
      <Grid container sx={{ marginTop: '60px', gap: '40px' }}>
        <Grid item xs={12} laptop sx={{ padding: 0 }}>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', marginBottom: '25px' }}>
            Tours
          </Typography>
          <Stack spacing={2}>
            <CatalogTourCard />
            <CatalogTourCard />
            <CatalogTourCard />
            <CatalogTourCard />
          </Stack>
        </Grid>

        <FilterContainer>
          <CatalogMainFilter />
        </FilterContainer>
      </Grid>
    </Container>
  </Box>
);

export default CataloguePage;
