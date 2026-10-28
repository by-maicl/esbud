import './RewardGrowatt.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Reveal from '../../../../components/Reveal/Reveal';
import CardHorizontal from '../../../../components/CardHorizontal/CardHorizontal';

import growattRewardsImg from '../../../../assets/growatt/rewards.jpg'
import growattRewards from '../../../../data/growattRewards'
import { Check } from 'lucide-react';

function RewardGrowatt() {
    return (
        <section className='rewardGrowatt'>
            <SectionTitle variant='medium' className='growattText'>Поважний і відомий виробник</SectionTitle>
            <div className='rewardGrowatt__wrapp'>
                <Reveal>
                    <img src={growattRewardsImg} alt="Growatt Rewards" />
                </Reveal>

                <div className='rewardGrowatt__cards'>
                    {growattRewards.map((reward, index) => (
                        <Reveal key={reward.id} delay={index * 150 + 200}>
                            <CardHorizontal
                                variant='growatt'
                                icon={Check}
                                title={reward.title}
                            >
                                {reward.text}
                            </CardHorizontal>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RewardGrowatt;