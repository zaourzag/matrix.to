/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";

import InviteTile from "./InviteTile";
import UserPreview, { InviterPreview } from "./UserPreview";
import RoomPreview, { RoomPreviewWithTopic } from "./RoomPreview";

export default {
    title: "InviteTile",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://figma.com/file/WSXjCGc1k6FVI093qhlzOP/04-Recieving-share-link?node-id=59%3A334",
        },
    },
};

export const withLink: React.FC<{}> = () => (
    <InviteTile
        inviteAction={{
            type: "link",
            link: "https://app.element.io/#/room/#asdfasf:matrix.org",
        }}
    >
        This is an invite with a link
    </InviteTile>
);

export const withInstruction: React.FC<{}> = () => (
    <InviteTile
        inviteAction={{
            type: "instruction",
            text: "Type /join #asdfasf:matrix.org",
        }}
    >
        This is an invite with an instruction
    </InviteTile>
);

export const withUserPreview: React.FC<{}> = () => (
    <InviteTile
        inviteAction={{
            type: "link",
            link: "https://app.element.io/#/room/#asdfasf:matrix.org",
        }}
    >
        <UserPreview
            user={{
                avatar_url: "mxc://matrix.org/EqMZYbAYhREvHXvYFyfxOlkf",
                displayname: "Nicholas Briteli",
            }}
            userId="@nicholasbritelli:matrix.org"
        />
    </InviteTile>
);

export const withRoomPreviewAndRoomTopic: React.FC<{}> = () => (
    <InviteTile
        inviteAction={{
            type: "link",
            link: "https://app.element.io/#/room/#asdfasf:matrix.org",
        }}
    >
        <RoomPreviewWithTopic
            room={{
                aliases: ["#murrays:cheese.bar"],
                avatar_url: "mxc://bleeker.street/CHEDDARandBRIE",
                guest_can_join: false,
                name: "CHEESE",
                num_joined_members: 37,
                room_id: "!ol19s:bleecker.street",
                topic: "Tasty tasty cheese",
                world_readable: true,
            }}
        />
    </InviteTile>
);

export const withRoomPreviewAndInviter: React.FC<{}> = () => (
    <InviteTile
        inviteAction={{
            type: "link",
            link: "https://app.element.io/#/room/#asdfasf:matrix.org",
        }}
    >
        <InviterPreview
            user={{
                avatar_url: "mxc://matrix.org/EqMZYbAYhREvHXvYFyfxOlkf",
                displayname: "Nicholas Briteli",
            }}
            userId="@nicholasbritelli:matrix.org"
        />
        <RoomPreview
            room={{
                aliases: ["#murrays:cheese.bar"],
                avatar_url: "mxc://bleeker.street/CHEDDARandBRIE",
                guest_can_join: false,
                name: "CHEESE",
                num_joined_members: 37,
                room_id: "!ol19s:bleecker.street",
                topic: "Tasty tasty cheese",
                world_readable: true,
            }}
        />
    </InviteTile>
);
