'use client';
import { Text, Avatar, Group, TypographyStylesProvider, Paper, Container } from '@mantine/core';
import { comentariosCursoEstampador } from '@/components/mocks/cursoComentarios';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { IoIosPlayCircle } from "react-icons/io";
import './index.scss';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function CardComments() {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [fadeId, setFadeId] = useState(null);

  const togglePlay = (id) => {
    if (playingVideoId === id) {
      setPlayingVideoId(null);
    } else {
      setPlayingVideoId(id);
      setFadeId(id);
    }
  };

  useEffect(() => {
    if (playingVideoId !== null && fadeId !== playingVideoId) {
      setFadeId(null);
    }
  }, [playingVideoId, fadeId]);

  const handlePlay = (id) => {
    setPlayingVideoId(id);
    setFadeId(id);
  };

  const handlePause = (id) => {
    if (playingVideoId === id) {
      setPlayingVideoId(null);
    }
  };

  return (
    <>
      {comentariosCursoEstampador.map((comentario) => (
        <Paper withBorder radius="md" className="cardcomments" key={comentario.id}>
          <Group className="cardcomments__contentheader">
            <Avatar src={comentario.avatar} alt={comentario.aluno} radius="xl" />
            <div>
              <Text fz="sm">{comentario.aluno}</Text>
              <Text fz="xs" c="dimmed">{comentario.turma}</Text>
            </div>
          </Group>
          <TypographyStylesProvider className="cardcomments__contentbody">
            {comentario.comentario ? (
              <Text m="md" fz="sm" mt={0} className="bodytext">{comentario.comentario}</Text>
            ) : (
              <Container pos="relative" mb="lg" p={0}>
                <ReactPlayer
                  url={comentario.video}
                  className="bodyvideo"
                  playing={playingVideoId === comentario.id}
                  width="100%"
                  type="video/mp4"
                  onPause={() => handlePause(comentario.id)}
                  onPlay={() => handlePlay(comentario.id)}
                />
                <div
                  className={`cardcomments__playpause ${playingVideoId === comentario.id ? 'cardcomments__playpause--fade' : ''}`}
                  onClick={() => togglePlay(comentario.id)}
                >
                  <IoIosPlayCircle className='icon' size={60} color='#fff' />
                </div>
              </Container>
            )}
          </TypographyStylesProvider>
        </Paper>
      ))}
    </>
  );
}