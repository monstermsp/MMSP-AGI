import PsychologyIcon from '@mui/icons-material/Psychology';

import type { ICommandsProvider } from './ICommandsProvider';

export const CommandsReact: ICommandsProvider = {
  id: 'ass-react',
  rank: 15,

  getCommands: () => [{
    primary: '/search',
    arguments: ['prompt'],
    description: 'Uses Google Search API to get real time infomration',
    Icon: PsychologyIcon,
  }],

};
