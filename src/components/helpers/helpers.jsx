// How to make helper functions for React
// https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native


/* Helpers */ 

const helpers = {
  helper1: function(props){
    let statusQueue = 10
    let statusInProgress = 50;
    let statusDone = 90;

    if (statusQueue !== 50 || 90) {
      return "Queue"
    } else if (statusInProgress !== 10 || 90) {
        return "In Progress"
      } else if (statusDone !== 10 || 50) {
          return "Done"
        }
  },
  helper2: function(props){
    let priorityVar = props.priority_id;

    if (priorityVar === 111) {
      return "Low"
    } else if (priorityVar === 555) {
        return "Medium"
      } else if (priorityVar === 999) {
          return "High"
        }      
  }
}

// export function thePriority(props) {
//   let priorityVar = props.priority_id;

//   if (priorityVar === 111) {
//     return "Low"
//   } else if (priorityVar === 555) {
//       return "Medium"
//     } else if (priorityVar === 999) {
//         return "High"
//       }
// };
// }

// class theStatus extends Component {
// export function theStatus(props) {
//   let statusVar = props.status_id;

//   if (statusVar === 10) {
//     return "Queue"
//   } else if (statusVar === 50) {
//       return "In Progress"
//     } else if (statusVar === 90) {
//         return "Done"
//       }
// };
// }
/* End Helpers */
// module.exports = thePriority, theStatus
export default helpers;
