const videos = require('../../src/db/models/video');
const category_videos = require('../../src/db/models/category_video');

exports.getAllVideo = async (req, res) => {
  try {
    const video = await videos.findAll({
        attributes: ['id', 'title', 'link_video',], 
        include: [
            {
              model: category_videos,
              as: 'category',
              attributes: ['id', 'tittle'],        
            },
          ],
    }); 
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: 'masih error', error });
  }
};


exports.getVideoById = async (req, res) => {
    const { id } = req.params;
    
    try {
      const video = await videos.findByPk(id, {
        attributes: ['id', 'title', 'link_video'],
        include: [
          {
            model: category_videos,
            as: 'category',
            attributes: ['id', 'tittle'],
          },
        ],
      });
  
      if (video) {
        res.status(200).json({ video });
      } else {
    
        res.status(404).json({ message: 'Video not found' });
      }
    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Error while fetching video', error });
    }
    
  };


    