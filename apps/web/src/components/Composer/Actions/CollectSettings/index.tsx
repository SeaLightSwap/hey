import { RectangleStackIcon } from '@heroicons/react/24/outline';
import { Modal, Tooltip } from '@hey/ui';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useState } from 'react';
import { useCollectModuleStore } from 'src/store/useCollectModuleStore';

import CollectForm from './CollectForm';

const CollectSettings: FC = () => {
  const reset = useCollectModuleStore((state) => state.reset);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Tooltip placement="top" content="Collect">
        <motion.button
          className="outline-brand-500 rounded-full outline-offset-8"
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setShowModal(!showModal)}
          aria-label="Choose Collect Module"
        >
          <RectangleStackIcon className="text-brand-500 h-5 w-5" />
        </motion.button>
      </Tooltip>
      <Modal
        title="Collect settings"
        icon={<RectangleStackIcon className="text-brand-500 h-5 w-5" />}
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
      >
        <CollectForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default CollectSettings;
