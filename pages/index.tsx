import { Client } from '@notionhq/client';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const notionApiTest = async () => {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    axios
      .get(
        `https://api.notion.com/v1/databases/06428267693b499e81de9b68df43bf43`,
        {
          headers: {
            Authorization: `Bearer secret_geQmDi20aYgfXoAqTjcQ4HumwQt4M0XUh2Jmf7shoZN`,
            'Notion-Version': '2022-01-06',
          },
        },
      )
      .then((res) => console.log(res));
    console.log(notion);

    // const listUsersResponse = await notion.users.list({});

    // console.log(listUsersResponse);
    console.log('test3');
  };

  notionApiTest();

  return <>test!!</>;
}
