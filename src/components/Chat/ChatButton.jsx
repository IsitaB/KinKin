import { 
  SendBirdProvider, 
  withSendBird,
  sendBirdSelectors, 
  Channel,
  ChannelList,
} from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import {React, useState, useContext} from 'react';
import ChatContext from './ChatContext'

const appId = process.env.REACT_APP_SENDBIRD_ID

const CustomChannel = ({createChannel, sdk, sendMessage}) => {
  const props = useContext(ChatContext)

  return (
    <>
      <button onClick={() => {
        let message = prompt("Send an intial message:", "Hi! I am interested in being your client...")
        console.log(message)

        console.log(props.pt.name)

        let channelParams = new sdk.GroupChannelParams()
        channelParams.isPublic = false
        channelParams.isEphemeral = false
        channelParams.isDistinct = true 
      
        var userIds = [props.pt.name]
        channelParams.addUserIds(userIds) 

        createChannel(channelParams) 
        .then(c => {
          console.log(c.url) 
          return c
        })
        .then(c => {
          let msgParams = new sdk.UserMessageParams()
          msgParams.message = message
          console.log(c.url)

          sendMessage(c.url, msgParams)
          .then((pendingMessage) => {
            return pendingMessage
          })
          .then(message => {
            console.warn(message)
          })
          .catch(c => console.warn(cancelAnimationFrame))
        })
        .catch(c => console.warn(c))
      }}>
        Message 
      </button>
    </>

  )
}

const CustomChannelWithSendBird = withSendBird(CustomChannel, (state) => {
  const createChannel = sendBirdSelectors.getCreateChannel(state)
  const sdk = sendBirdSelectors.getSdk(state)
  const sendMessage = sendBirdSelectors.getSendUserMessage(state)
  return ({createChannel, sdk, sendMessage})
})

const ChatButton = (props) => {

  return (
    <>
    <SendBirdProvider 
      appId={appId}
      userId={props.user.publicName} 
      nickname={props.user.publicName}
      profileUrl={props.user.pictureUrl}
    >
      <ChatContext.Provider value={props}> 
          <CustomChannelWithSendBird />
      </ChatContext.Provider>

    </SendBirdProvider>
    </>
  )
}

export default ChatButton; 


