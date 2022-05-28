import _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { config } from '../../config';
import { Character } from '../../model';

const datas: Character[] = config.characters.map(character => { return { ...character, stars: 0 } })

class charactersService {

    list(top = false) {
        if (top) {
            return _.take(datas.sort((a, b) => b.stars - a.stars), 5)
        }
        return datas;
    };
    couples() {
        return _.chunk(_.shuffle(datas), 2);
    };

    vote(characterId: number) {
        const index = _.findIndex(datas, o => o.id === characterId);
        if (index > -1) {
            datas[index].stars++;
            return datas[index]
        }       
    }
}

export default new charactersService();