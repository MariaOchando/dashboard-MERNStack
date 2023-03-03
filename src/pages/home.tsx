import React from 'react';
import { useList } from '@pankod/refine-core/dist/hooks/data/useList';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import TotalRevenue from 'components/charts/TotalRevenue';
import PieChart from 'components/charts/PieChart';
import PropertyReferrals from 'components/charts/PropertyReferrals';
const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Propierties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Porperties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Porperties for Cities"
          value={555}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}
export default home