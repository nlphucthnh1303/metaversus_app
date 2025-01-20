'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import {fadeIn, navVariants, slideIn, staggerContainer, textVariant} from '../utils/motion';
import {ExploreCard, InsightCard, TitleText, TypingText} from '../components';
import {exploreWorlds, insights} from "../constants";

const Insights = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: 'false', amount: 0.25}}
            className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <TypingText title="| Insights" textStyles="text-center" />
            <TitleText title="Insights about metaverse" textStyles="text-center" />
            <div className="mt-[50px] flex flex-col gap-[30px]">
                {
                    insights.map((insight, index) => (
                        <InsightCard {...insight} />
                    ))
                }
            </div>
        </motion.div>
    </section>
);

export default Insights;
