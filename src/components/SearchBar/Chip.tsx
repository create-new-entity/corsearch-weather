
import styles from './Chip.module.scss';

type ChipProps = {
    city: string;
    country: string;
    onRemove: () => void;
};

export const Chip = ({ city, country, onRemove }: ChipProps) => {
    return (
        <div className={styles.chip}>
            <span className={styles.chipLabel}>
                {city}, {country}
            </span>

            <button
                type="button"
                className={styles.chipRemove}
                onClick={onRemove}
                aria-label={`Remove ${city}, ${country}`}
            >
                ×
            </button>
        </div>
    );
};