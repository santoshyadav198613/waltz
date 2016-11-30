package com.khartec.waltz.model.involvement_kind;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.khartec.waltz.model.DescriptionProvider;
import com.khartec.waltz.model.IdProvider;
import com.khartec.waltz.model.LastUpdatedProvider;
import com.khartec.waltz.model.NameProvider;
import org.immutables.value.Value;

@Value.Immutable
@JsonSerialize(as = ImmutableInvolvementKind.class)
@JsonDeserialize(as = ImmutableInvolvementKind.class)
public abstract class InvolvementKind implements
        IdProvider,
        NameProvider,
        DescriptionProvider,
        LastUpdatedProvider {
}