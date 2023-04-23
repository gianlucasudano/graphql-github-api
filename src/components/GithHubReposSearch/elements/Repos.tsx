import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Star from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import RepoForked from './RepoForkedIcon';

const GITHUB_URL = 'https://github.com';

interface SingleRepoProps {
  id: string;
  forkCount: number;
  name: string;
  resourcePath: string;
  stargazerCount: number;
}

interface ReposProps {
  node: SingleRepoProps;
}

function SingleRepo({
  forkCount,
  name,
  resourcePath,
  stargazerCount,
}: Omit<SingleRepoProps, 'id'>) {
  const repoUrl = `${GITHUB_URL}${resourcePath}`;
  return (
    <ListItem divider>
      <ListItemText>
        <Typography variant="body2">
          <a href={repoUrl} target="_blank" title={name} rel="noreferrer">
            {name}
          </a>
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction sx={{ display: 'flex' }}>
        <Star sx={{ pr: 0.2 }} />
        <Typography variant="body2">{stargazerCount}</Typography>
        <RepoForked />
        <Typography variant="body2">{forkCount}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

function Repos({ dataRepos }: { dataRepos: ReposProps[] | [] }) {
  const theme = useTheme();
  return (
    <Stack gap={1} sx={{ overflowY: 'scroll', maxHeight: theme.spacing(40) }}>
      <List>
        <ListItem
          disablePadding
          sx={{ borderBottom: `${theme.spacing(0.2)} solid` }}
        >
          <Typography
            component="h2"
            variant="h6"
            sx={{ fontWeight: theme.typography.fontWeightBold }}
          >
            Repositories
          </Typography>
        </ListItem>
        {dataRepos &&
          dataRepos.length > 0 &&
          dataRepos.map((repo) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <SingleRepo key={repo.node.id} {...repo.node} />
          ))}
      </List>
      {dataRepos && dataRepos.length === 0 && (
        <Box>
          <Alert severity="info">No repositories available</Alert>
        </Box>
      )}
    </Stack>
  );
}

export default Repos;
